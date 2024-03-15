import React, { Fragment } from 'react'
import { GiWhistle } from 'react-icons/gi'
import { BiFootball } from 'react-icons/bi'
import { GiAmericanFootballPlayer } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { FaDiscord } from 'react-icons/fa'
import { GrMedium } from 'react-icons/gr'
import { FaPodcast } from 'react-icons/fa'
import { FaTwitch } from 'react-icons/fa'
import { AiOutlineGithub } from 'react-icons/ai'

export default function NotificationModal() {
  return (
    <Fragment>
      <div className=" bg-opacity-25">
        <div className="h-screen flex justify-center items-center   ">
          <div className="flex justify-center max-w-lg">
            <div className="text-center shadow-xl shadow-purple-300/50 bg-white p-8 text-xl  ">
              <div className="text-purple-500 text-2xl flex justify-center">
                <BiFootball /> <GiWhistle />
              </div>
              <div className="text-4xl font-extrabold">
                Your Game is Yet to begin
              </div>
              <div className="pt-4">
                The officials, clubs and team players are currently working and
                preparing for the competition. You can explore the activities.
              </div>

              <div className="py-6">
                For now, we're
                <span className="text-purple-500  text-2xl font-extrabold flex justify-center">
                  <GiAmericanFootballPlayer />
                  Hacking!!!
                  <GiAmericanFootballPlayer />
                </span>
              </div>
              <div className="mt-8  flex-wrap justify-center inline">
                  Join Us
                <ul className="flex justify-center text-purple-500 space-x-5">
                  <li className="pr-1">
                    <a
                      href="https://discord.gg/NAKPcxaS"
                      title="Join discord Channel"
                    >
                      <FaDiscord />
                    </a>
                  </li>
                  <li className="pr-1">
                    <a
                      href="https://mutantfootballmanager.medium.com/"
                      title="Read on Medium">
                      <GrMedium />
                    </a>
                  </li>
                  <li className="pr-1">
                    <a
                      href="https://talk.harmony.one/t/mutant-football-manager/16540?u=cry8"
                      title="Harmony Talk">
                      <FaPodcast />
                    </a>
                  </li>
                  <li className="pr-1">
                    <a
                      href="https://twitch.tv/mutantfootballmanager"
                      title="Twitch Account"
                    >
                      <FaTwitch />
                    </a>
                  </li>
                  <li className='pr-1'> <a href='https://github.com/Cry8/Mutant_Football_Manager' title='Github Repository'>  <AiOutlineGithub /> </a></li>

                </ul>
              </div>

              <div className="pt-12 text-red-600 flex justify-center items-center ">
                <Link to="/">
                  <button className="flex justify-center items-center text-sm cursor-pointer">
                    <AiOutlineClose /> close message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
