import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { CiFaceSmile } from "react-icons/ci";
import { FcBusinessman } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcRating } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcLandscape } from "react-icons/fc";
import { FcFlashOn } from "react-icons/fc";
import { FcAutomotive } from "react-icons/fc";
import { FcEngineering } from "react-icons/fc";

const Meeting1: NextPage = () => {
  return (

    <div className="container" id="features">
        <div className="mainText col-lg-6">
            <h2>Meet Each Other!</h2>
        </div>

        <div>
            <input type="text" placeholder="Type here" className="conversationBox input input-bordered w-full max-w-xs" />
        </div>

        
        
      <div className="item3 rounded">
        <div className="feature-box col-lg-4">
            <label className="swap swap-flip text-5xl">
                <input type="checkbox" />
                <div className="swap-on">😄</div>
                <div className="swap-off"><FcBusinessman/></div>
            </label>
          <h2 className="feature-title">Bruce Wayne</h2>
          <p className="text-green-600">Online</p>
        </div>

        <div className="feature-box col-lg-4">
            <label className="swap swap-flip text-5xl">
                <input type="checkbox" />
                <div className="swap-on">😐</div>
                <div className="swap-off"><FcLikePlaceholder/></div>
            </label>
          <h2 className="feature-title">Kevin Wu</h2>
          <p className="text-orange-300">Busy</p>
        </div>

        <div className="feature-box col-lg-4">
            <label className="swap swap-flip text-5xl">
                <input type="checkbox" />
                <div className="swap-on">🙁</div>
                <div className="swap-off"><FcSportsMode/></div>
            </label>
          <h2 className="feature-title">Robert Smith</h2>
          <p>Last Online: 3 days ago</p>
        </div>
      </div>

        <div className="item2 rounded static">
            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">😐</div>
                    <div className="swap-off"><FcGlobe/></div>
                </label>
            <h2 className="feature-title">Betty White</h2>
            <p className="text-orange-300">Busy</p>
            </div>

            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">😐</div>
                    <div className="swap-off"><FcFlashOn/></div>
                </label>
            <h2 className="feature-title">Williams Davis</h2>
            <p className="text-orange-300">Busy</p>
            </div>

            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">🙁</div>
                    <div className="swap-off"><FcRating/></div>
                </label>
            <h2 className="feature-title">Mary Johnson</h2>
            <p>Last Online: 1 week ago</p>
            </div>
        </div>

        <div className="item4 rounded static">
            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">😄</div>
                    <div className="swap-off"><FcLandscape/></div>
                </label>
            <h2 className="feature-title">Jeffery Pierce</h2>
            <p className="text-green-600">Online</p>
            </div>

            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">😐</div>
                    <div className="swap-off"><FcAutomotive/></div>
                </label>
            <h2 className="feature-title">Jack Lee</h2>
            <p className="text-orange-300">Busy</p>
            </div>

            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">🙁</div>
                    <div className="swap-off"><FcEngineering/></div>
                </label>
            <h2 className="feature-title">Jane Doe</h2>
            <p>Last Online: 5 mins ago</p>
            </div>
        </div>
    </div>
    )
}

export default Meeting1
