import React, { useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { CiFaceSmile } from 'react-icons/ci'

import Data from '../data/friends.json'
import MeetProfile from './MeetProfile'

const Meeting2: NextPage = () => {
  const [search, setSearch] = useState('')
  return (
    <div className="container" id="features">
      <div className="flex flex-col items-center">
        <h2 className="font-cartoon text-center pb-5">Meet Each Other!</h2>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="conversationBox input input-bordered w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="carousel carousel-center max-w-2xl p-10 space-x-10 bg-neutral rounded-box mt-10">
          {Data.friendData.map((friend, i) => {
            if (
              search === '' ||
              friend.name.toLowerCase().includes(search?.toLowerCase())
            ) {
              return (
                <div
                  key={i}
                  className="carousel-item border-2 border-zinc-100 p-3 rounded-lg bg-zinc-100 min-w-min"
                >
                  <MeetProfile friend={friend} />
                </div>
              )
            }
          })}
        </div>
      </div>

      {/* <div className="feature-box col-lg-4">
          <label className="swap swap-flip text-5xl">
            <input type="checkbox" />
            <div className="swap-on">😄</div>
            <div className="swap-off">
              <FcLandscape />
            </div>
          </label>
          <div className="flex justify-between">
            <h2 className="feature-title">Jeffery Pierce</h2>
            <h3>Age: 19</h3>
          </div>
          <div className="flex justify-between">
            <p className="text-green-600">Online</p>
            <h4>❤️ Reading</h4>
          </div>
        </div>

        <div className="feature-box col-lg-4">
          <label className="swap swap-flip text-5xl">
            <input type="checkbox" />
            <div className="swap-on">😐</div>
            <div className="swap-off">
              <FcLikePlaceholder />
            </div>
          </label>
          <div className="flex justify-between">
            <h2 className="feature-title">Kevin Wu</h2>
            <h3>Age: 21</h3>
          </div>
          <div className="flex justify-between">
            <p className="text-orange-300">Busy</p>
            <h4>❤️ Music</h4>
          </div>
        </div>

        <div className="feature-box col-lg-4">
          <label className="swap swap-flip text-5xl">
            <input type="checkbox" />
            <div className="swap-on">😐</div>
            <div className="swap-off">
              <FcGlobe />
            </div>
          </label>
          <div className="flex justify-between">
            <h2 className="feature-title">Betty White</h2>
            <h3>Age: 20</h3>
          </div>
          <div className="flex justify-between">
            <p className="text-orange-300">Busy</p>
            <h4>❤️ Camping</h4>
          </div>
        </div>

        <div className="feature-box col-lg-4">
          <label className="swap swap-flip text-5xl">
            <input type="checkbox" />
            <div className="swap-on">😐</div>
            <div className="swap-off">
              <FcFlashOn />
            </div>
          </label>
          <div className="flex justify-between">
            <h2 className="feature-title">Williams Davis</h2>
            <h3>Age: 22</h3>
          </div>
          <div className="flex justify-between">
            <p className="text-orange-300">Busy</p>
            <h4>❤️ Soccer</h4>
          </div>
        </div>

        <div className="feature-box col-lg-4">
          <label className="swap swap-flip text-5xl">
            <input type="checkbox" />
            <div className="swap-on">😐</div>
            <div className="swap-off">
              <FcAutomotive />
            </div>
          </label>
          <div className="flex justify-between">
            <h2 className="feature-title">Jack Lee</h2>
            <h3>Age: 24</h3>
          </div>
          <div className="flex justify-between">
            <p className="text-orange-300">Busy</p>
            <h4>❤️ Skating</h4>
          </div>
        </div>

        <div className="feature-box col-lg-4">
          <label className="swap swap-flip text-5xl">
            <input type="checkbox" />
            <div className="swap-on">🙁</div>
            <div className="swap-off">
              <FcRating />
            </div>
          </label>
          <div className="flex justify-between">
            <h2 className="feature-title">Mary Johnson</h2>
            <h3>Age: 22</h3>
          </div>
          <div className="flex justify-between">
            <p>Last Online:1week ago</p>
            <h4>❤️ Running</h4>
          </div>
        </div>

        <div className="feature-box col-lg-4">
          <label className="swap swap-flip text-5xl">
            <input type="checkbox" />
            <div className="swap-on">🙁</div>
            <div className="swap-off">
              <FcEngineering />
            </div>
          </label>
          <div className="flex justify-between">
            <h2 className="feature-title">Jane Doe</h2>
            <h3>Age: 27</h3>
          </div>
          <div className="flex justify-between">
            <p>Last Online:5mins ago</p>
            <h4>❤️ Swimming</h4>
          </div>
        </div>

        <div className="feature-box col-lg-4">
          <label className="swap swap-flip text-5xl">
            <input type="checkbox" />
            <div className="swap-on">🙁</div>
            <div className="swap-off">
              <FcSportsMode />
            </div>
          </label>
          <div className="flex justify-between">
            <h2 className="feature-title">Robert Smith</h2>
            <h3>Age: 17</h3>
          </div>
          <div className="flex justify-between">
            <p>Last Online:3days ago</p>
            <h4>❤️ Coding</h4>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Meeting2
