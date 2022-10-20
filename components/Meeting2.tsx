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

const Meeting2: NextPage = () => {
  return (

    <div className="container" id="features">
        <div className="mainText col-lg-6">
            <h2>Meet Each Other!</h2>
        </div>

        <div>
            <input type="text" placeholder="Type here" className="conversationBox input input-bordered w-full max-w-xs" />
        </div>

        
        
      <div className="item3 rounded p-5 overflow-y-scroll max-h-90 shadow-lg">
        <div className="feature-box col-lg-4">
            <label className="swap swap-flip text-5xl">
                <input type="checkbox" />
                <div className="swap-on">😄</div>
                <div className="swap-off"><FcBusinessman/></div>
            </label>
            <h2 className="feature-title">Bruce Wayne<h3>Age: 21</h3></h2>
            <p className="text-green-600">
                Online
                <h4>
                    ❤️ Writing
                </h4>
            </p>
        </div>

        <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">😄</div>
                    <div className="swap-off"><FcLandscape/></div>
                </label>
            <h2 className="feature-title">Jeffery Pierce<h3>Age: 19</h3></h2>
            <p className="text-green-600">
                Online
                <h4>
                    ❤️ Reading
                </h4>
            </p>
        </div>

        <div className="feature-box col-lg-4">
            <label className="swap swap-flip text-5xl">
                <input type="checkbox" />
                <div className="swap-on">😐</div>
                <div className="swap-off"><FcLikePlaceholder/></div>
            </label>
            <h2 className="feature-title">Kevin Wu<h3>Age: 21</h3></h2>
            <p className="text-orange-300">
                Busy
                <h4>
                    ❤️ Music
                </h4>
            </p>
        </div>
        
        <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">😐</div>
                    <div className="swap-off"><FcGlobe/></div>
                </label>
            <h2 className="feature-title">Betty White<h3>Age: 20</h3></h2>
            <p className="text-orange-300">
                Busy
                <h4>
                    ❤️ Camping
                </h4>
            </p>
            </div>

            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">😐</div>
                    <div className="swap-off"><FcFlashOn/></div>
                </label>
                
            <h2 className="feature-title">Williams Davis<h3>Age: 22</h3></h2>
            <p className="text-orange-300">
                Busy
                <h4>
                    ❤️ Soccer
                </h4>
            </p>
            </div>

            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">😐</div>
                    <div className="swap-off"><FcAutomotive/></div>
                </label>
            <h2 className="feature-title">Jack Lee<h3>Age: 24</h3></h2>
            <p className="text-orange-300">
                Busy
                <h4>
                    ❤️ Skating
                </h4>
            </p>
            </div>

            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">🙁</div>
                    <div className="swap-off"><FcRating/></div>
                </label>
            <h2 className="feature-title">Mary Johnson<h3>Age: 22</h3></h2>
            <p>
                Last Online:1week ago
                <h4>
                    ❤️ Running
                </h4>
            </p>
            </div>

            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">🙁</div>
                    <div className="swap-off"><FcEngineering/></div>
                </label>
            <h2 className="feature-title">Jane Doe<h3>Age: 27</h3></h2>
            <p>
                Last Online:5mins ago
                <h4>
                    ❤️ Swimming
                </h4>
            </p>
            </div>

            <div className="feature-box col-lg-4">
            <label className="swap swap-flip text-5xl">
                <input type="checkbox" />
                <div className="swap-on">🙁</div>
                <div className="swap-off"><FcSportsMode/></div>
            </label>
                <h2 className="feature-title">Robert Smith<h3>Age: 17</h3></h2>
                <p>
                Last Online:3days ago
                <h4>
                    ❤️ Coding
                </h4>
                </p>
             </div>
      </div>
    </div>
    )
}

export default Meeting2
