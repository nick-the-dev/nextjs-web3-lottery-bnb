// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol";

contract Lottery is ERC721Enumerable, Ownable, VRFConsumerBaseV2 {
  //
  VRFCoordinatorV2Interface COORDINATOR;

  // Your subscription ID.
  uint64 s_subscriptionId;

  // Rinkeby coordinator. For other networks,
  // see https://docs.chain.link/docs/vrf-contracts/#configurations
  address vrfCoordinator = 0xAE975071Be8F8eE67addBC1A82488F1C24858067; // Polygon (Matic) mainnet

  // The gas lane to use, which specifies the maximum gas price to bump to.
  // For a list of available gas lanes on each network,
  // see https://docs.chain.link/docs/vrf-contracts/#configurations
  bytes32 keyHash = 0xcc294a196eeeb44da2888d17c0625cc88d70d9760a69d58d853ba6581a9ab0cd; // Polygon (Matic) mainnet 500 gwei Key Hash

  // Depends on the number of requested values that you want sent to the
  // fulfillRandomWords() function. Storing each word costs about 20,000 gas,
  // so 100,000 is a safe default for this example contract. Test and adjust
  // this limit based on the network that you select, the size of the request,
  // and the processing of the callback request in the fulfillRandomWords()
  // function.
  uint32 callbackGasLimit = 200000;

  // The default is 3, but you can set this higher.
  uint16 requestConfirmations = 3;

  // For this example, retrieve 1 random value in one request.
  // Cannot exceed VRFCoordinatorV2.MAX_NUM_WORDS.
  uint32 numWords = 1;

  uint256[] public s_randomWords;
  uint256 public s_requestId;
  address s_owner;
  using Strings for uint256;
  string baseURI;
  string winnerUri;
  string public baseExtension = ".json";
  uint256 public cost = 2 ether;
  uint256 public maxSupply = 100;
  uint256 public maxMintAmount = 50;
  bool public paused = false;
  address payable[] public players;
  uint256[] public nfts;
  uint256 public lotteryId;
  mapping(uint256 => uint256) public lotteryHistory;
  uint256[] _allTokens;

  constructor(
    string memory _name,
    string memory _symbol,
    string memory _initBaseURI,
    string memory _initWinnerURI,
    uint64 subscriptionId
  ) ERC721(_name, _symbol) VRFConsumerBaseV2(vrfCoordinator) {
    setBaseURI(_initBaseURI);
    setWinnerURI(_initWinnerURI);

    lotteryId = 1;

    COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
    s_owner = msg.sender;
    s_subscriptionId = subscriptionId;
  }

  // Events
  event Mint(address indexed to, uint256 indexed quantity);

  event GameOver(address indexed winner);

  // internal
  function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
  }

  // public
  function mint(uint256 _mintAmount) public payable {
    uint256 supply = totalSupply();
    require(!paused);
    require(_mintAmount > 0);
    require(_mintAmount <= maxMintAmount);
    require(supply + _mintAmount <= maxSupply);

    if (msg.sender != owner()) {
      require(msg.value >= cost * _mintAmount);
    }

    for (uint256 i = 1; i <= _mintAmount; i++) {
      _safeMint(msg.sender, supply + i);
      nfts.push(i);
    }

    players.push(payable(msg.sender));
    emit Mint(msg.sender, _mintAmount);

    supply = totalSupply();
    if (supply == maxSupply) {
      _startPickingWinner();
    }
  }

  function walletOfOwner(address _owner) public view returns (uint256[] memory) {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](ownerTokenCount);
    for (uint256 i; i < ownerTokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokenIds;
  }

  function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");

    string memory currentBaseURI = _baseURI();

    if (lotteryHistory[lotteryId] == tokenId) {
      return string(abi.encodePacked(winnerUri, tokenId.toString(), baseExtension));
    }

    return
      bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
  }

  function pause(bool _state) public onlyOwner {
    paused = _state;
  }

  function getWinnerByLottery(uint256 lottery) public view returns (uint256) {
    return lotteryHistory[lottery];
  }

  function getBalance() public view returns (uint256) {
    return address(this).balance;
  }

  function getPlayers() public view returns (address payable[] memory) {
    return players;
  }

  //only owner
  function setCost(uint256 _newCost) public onlyOwner {
    cost = _newCost;
  }

  function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
    maxMintAmount = _newmaxMintAmount;
  }

  function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
  }

  function setWinnerURI(string memory _newWinnerURI) public onlyOwner {
    winnerUri = _newWinnerURI;
  }

  function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
  }

  function _startPickingWinner() private {
    requestRandomWords();
  }

  // Assumes the subscription is funded sufficiently.
  function requestRandomWords() public {
    // Will revert if subscription is not set and funded.
    s_requestId = COORDINATOR.requestRandomWords(
      keyHash,
      s_subscriptionId,
      requestConfirmations,
      callbackGasLimit,
      numWords
    );
  }

  function fulfillRandomWords(
    uint256, /* requestId */
    uint256[] memory randomWords
  ) internal override {
    s_randomWords = randomWords;
    _continuePickingWinner();
  }

  function _continuePickingWinner() private {
    uint256 index = s_randomWords[0] % nfts.length;
    // Add winner's tokenId to history
    lotteryHistory[lotteryId] = nfts[index];
    // Moving to next game
    // lotteryId++;
    // Check which address has wining nft
    address payable winner = payable(ownerOf(nfts[index]));
    // Winner gets a half
    winner.transfer(address(this).balance / 2);
    // Owner gets the rest
    payable(owner()).transfer(address(this).balance);

    emit GameOver(winner);

    // reset the state of the contract
    // players = new address payable[](0);
  }
}
