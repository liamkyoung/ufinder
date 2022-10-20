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

        
      <div className="item5 rounded p-5 overflow-y-scroll max-h-90 shadow-lg bg-[#d5f3f3]">
        <div className="feature-box col-lg-4">
            <label className="swap swap-flip text-5xl">
                <input type="checkbox" />
                <div className="swap-on">😄</div>
                <div className="swap-off"><FcBusinessman/></div>
            </label>
            <div className='flex justify-between'>
                <h2 className="feature-title">Bruce Wayne</h2>
                <h3>Age: 21</h3>
            </div>
            <div className='flex justify-between'>
                <p className="text-green-600">Online</p>
                <h4>❤️ Writing</h4>
            </div>  
        </div>

        <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">😄</div>
                    <div className="swap-off"><FcLandscape/></div>
                </label>
            <div className='flex justify-between'>
                <h2 className="feature-title">Jeffery Pierce</h2>
                <h3>Age: 19</h3>
            </div>
            <div className='flex justify-between'>
                <p className="text-green-600">Online</p>
                <h4>❤️ Reading</h4>
            </div>  
        </div>

        <div className="feature-box col-lg-4">
            <label className="swap swap-flip text-5xl">
                <input type="checkbox" />
                <div className="swap-on">😐</div>
                <div className="swap-off"><FcLikePlaceholder/></div>
            </label>
            <div className='flex justify-between'>
                <h2 className="feature-title">Kevin Wu</h2>
                <h3>Age: 21</h3>
            </div>
            <div className='flex justify-between'>
                <p className="text-orange-300">Busy</p>
                <h4>❤️ Music</h4>
            </div>
            
        </div>
        
        <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">😐</div>
                    <div className="swap-off"><FcGlobe/></div>
                </label>
            <div className='flex justify-between'>
                <h2 className="feature-title">Betty White</h2>
                <h3>Age: 20</h3>
            </div>
            <div className='flex justify-between'>
                <p className="text-orange-300">Busy</p>
                <h4>❤️ Camping</h4>
            </div>
            </div>

            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">😐</div>
                    <div className="swap-off"><FcFlashOn/></div>
                </label>
            <div className='flex justify-between'>
                <h2 className="feature-title">Williams Davis</h2>
                <h3>Age: 22</h3>
            </div>
            <div className='flex justify-between'>
                <p className="text-orange-300">Busy</p>
                <h4>❤️ Soccer</h4>
            </div>   
            </div>

            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">😐</div>
                    <div className="swap-off"><FcAutomotive/></div>
                </label>
            <div className='flex justify-between'>
                <h2 className="feature-title">Jack Lee</h2>
                <h3>Age: 24</h3>
            </div>
            <div className='flex justify-between'>
                <p className="text-orange-300">Busy</p>
                <h4>❤️ Skating</h4>
            </div>   
            </div>

            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">🙁</div>
                    <div className="swap-off"><FcRating/></div>
                </label>
            <div className='flex justify-between'>
                <h2 className="feature-title">Mary Johnson</h2>
                <h3>Age: 22</h3>
            </div>
            <div className='flex justify-between'>
                <p>Last Online:1week ago</p>
                <h4>❤️ Running</h4>
            </div>   
            </div>

            <div className="feature-box col-lg-4">
                <label className="swap swap-flip text-5xl">
                    <input type="checkbox" />
                    <div className="swap-on">🙁</div>
                    <div className="swap-off"><FcEngineering/></div>
                </label>
            <div className='flex justify-between'>
                <h2 className="feature-title">Jane Doe</h2>
                <h3>Age: 27</h3>
            </div>
            <div className='flex justify-between'>
                <p>Last Online:5mins ago</p>
                <h4>❤️ Swimming</h4>
            </div> 
            </div>

            <div className="feature-box col-lg-4">
            <label className="swap swap-flip text-5xl">
                <input type="checkbox" />
                <div className="swap-on">🙁</div>
                <div className="swap-off"><FcSportsMode/></div>
            </label>
            <div className='flex justify-between'>
                <h2 className="feature-title">Robert Smith</h2>
                <h3>Age: 17</h3>
            </div>
            <div className='flex justify-between'>
                <p>Last Online:3days ago</p>
                <h4>❤️ Coding</h4>
            </div>  
            </div>
      </div>
    </div>
    )
}

export default Meeting2
