import { FC } from "react"
import Card from "../card"
import Image from "next/image"

const TheTeam: FC = () => {
  return (
    <section className="the-team" id="the-team">
      <h2 className="section-title">The Team</h2>
      <div className="cards-wrapper">
        <Card>
          <div className="img-wrapper">
            <Image 
              src="/assets/team.png" 
              width={143} 
              height={143} 
              alt="Team Profile Icon"
            />
          </div>
          <span className="letters">DM</span>
          <span className="position">Founder</span>
          <span className="desc">Crypto Entrepreneur with 9 years’ experience in the sports and gaming industries.</span>
        </Card>
        <Card>
          <div className="img-wrapper">
            <Image 
              src="/assets/team.png" 
              width={143} 
              height={143} 
              alt="Team Profile Icon"
            />
          </div>
          <span className="letters">NT</span>
          <span className="position">Full-Stack Developer</span>
          <span className="desc"> 10 years’ experience. Development of website backend and frontend, smart contracts.</span>
        </Card>
        <Card>
          <div className="img-wrapper">
            <Image 
              src="/assets/team.png" 
              width={143} 
              height={143} 
              alt="Team Profile Icon"
            />
          </div>
          <span className="letters">KP</span>
          <span className="position">Copywriter</span>
          <span className="desc">Experienced Copywriter with 7 years’ experience.</span>
        </Card>
        <Card>
          <div className="img-wrapper">
            <Image 
              src="/assets/team.png" 
              width={143} 
              height={143} 
              alt="Team Profile Icon"
            />
          </div>
          <span className="letters">VA</span>
          <span className="position">Lead Designer</span>
          <span className="desc">10 years’ experience. Website and NFT’s design development.</span>
        </Card>
      </div>
    </section>
  )
}

export default TheTeam
