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
import { FcBusinesswoman } from "react-icons/fc";
import { FcCloseUpMode } from "react-icons/fc";
import { FcBiomass } from "react-icons/fc";
import { FcBrokenLink } from "react-icons/fc";
import { FcDebian } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

const Meeting1: NextPage = () => {
  return (

    <div className="container" id="features">
        <div className="mainText col-lg-6">
            <h2 className='font-cartoon'>Meet Each Other!</h2>
        </div>

        <div>
            <input type="text" placeholder="Search..." className="conversationBox input input-bordered w-full max-w-xs" />
        </div>

      <div className="item3 rounded bg-[#f6f9fa]">
        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">😄</div>
                <div className="swap-off"><FcBusinessman/></div>
            </label>
            <div>
                <h2 className="feature-title">Bruce Wayne</h2>
                <p className="text-green-600">Online</p>
            </div>
            <div className="ml-14">
                <h4>❤️ Reading</h4>
            </div>
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">😐</div>
                <div className="swap-off"><FcLikePlaceholder/></div>
            </label>
            <div>
                <h2 className="feature-title">Kevin Wu</h2>
                <p className="text-orange-300">Busy</p>
            </div>
            <div className="ml-20">
                <h4>❤️ Music</h4>
            </div>
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">😐</div>
                <div className="swap-off"><FcSportsMode/></div>
            </label>
            <div>
                <h2 className="feature-title">Robert Smith</h2>
                <p className="text-orange-300">Busy</p>
            </div>
            <div className="ml-14">
                <h4>❤️ Camping</h4>
            </div>
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">😄</div>
                <div className="swap-off"><FcBusinesswoman/></div>
            </label>
            <div>
                <h2 className="feature-title">Gabe Brill</h2>
                <p className="text-green-600">Online</p>
            </div>
            <div className="ml-20">
                <h4>❤️ Speaking</h4>
            </div>
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">😐</div>
                <div className="swap-off"><FcCloseUpMode/></div>
            </label>
            <div>
                <h2 className="feature-title">White Fuj</h2>
                <p className="text-orange-300">Busy</p>
            </div>
            <div className="ml-20">
                <h4>❤️ Pop Music</h4>
            </div>
            
          
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">🙁</div>
                <div className="swap-off"><FcSportsMode/></div>
            </label>
            <div>
                <h2 className="feature-title">Lucio Lee</h2>
                <p>3 days ago</p>
            </div>
            <div className="ml-16">
                <h4>❤️ Catching</h4>
            </div>
        </div>
      </div>




        <div className="item2 rounded static bg-[#f6f9fa]">
        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">😄</div>
                <div className="swap-off"><FcBusinessman/></div>
            </label>
            <div>
                <h2 className="feature-title">Bruce Wayne</h2>
                <p className="text-green-600">Online</p>
            </div>
            <div className="ml-14">
                <h4>❤️ Reading</h4>
            </div>
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">😐</div>
                <div className="swap-off"><FcFlashOn/></div>
            </label>
            <div>
                <h2 className="feature-title">Will Davis</h2>
                <p className="text-orange-300">Busy</p>
            </div>
            <div className="ml-20">
                <h4>❤️ Music</h4>
            </div>
            
          
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">🙁</div>
                <div className="swap-off"><FcRating/></div>
            </label>
            <div>
                <h2 className="feature-title">Mary Johnson</h2>
                <p>1 week ago</p>
            </div>
            <div className="ml-12">
                <h4>❤️ Camping</h4>
            </div>
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">😄</div>
                <div className="swap-off"><FcBusinesswoman/></div>
            </label>
            <div>
                <h2 className="feature-title">Gabe Brill</h2>
                <p className="text-green-600">Online</p>
            </div>
            <div className="ml-20">
                <h4>❤️ Lecturing</h4>
            </div>
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">😄</div>
                <div className="swap-off"><FcCloseUpMode/></div>
            </label>
            <div>
                <h2 className="feature-title">Emma Andrew</h2>
                <p className="text-green-600">Online</p>
            </div>
            <div className="ml-8">
                <h4>❤️ Quiet Music</h4>
            </div>
            
          
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">🙁</div>
                <div className="swap-off"><FcBiomass/></div>
            </label>
            <div>
                <h2 className="feature-title">Olivar Noah</h2>
                <p>7 days ago</p>
            </div>
            <div className="ml-16">
                <h4>❤️ Basketball</h4>
            </div>
        </div>

        </div>

        <div className="item4 rounded static bg-[#f6f9fa]">
        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">😄</div>
                <div className="swap-off"><FcBrokenLink/></div>
            </label>
            <div>
                <h2 className="feature-title">ElizaBeth Mia</h2>
                <p className="text-green-600">Online</p>
            </div>
            <div className="ml-14">
                <h4>❤️ Painting</h4>
            </div>
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">😐</div>
                <div className="swap-off"><FcFlashOn/></div>
            </label>
            <div>
                <h2 className="feature-title">Will Davis</h2>
                <p className="text-orange-300">Busy</p>
            </div>
            <div className="ml-20">
                <h4>❤️ Cooking</h4>
            </div>
            
          
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">🙁</div>
                <div className="swap-off"><FcRating/></div>
            </label>
            <div>
                <h2 className="feature-title">Mary Johnson</h2>
                <p>3 week ago</p>
            </div>
            <div className="ml-12">
                <h4>❤️ Travel</h4>
            </div>
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">😄</div>
                <div className="swap-off"><FcDebian/></div>
            </label>
            <div>
                <h2 className="feature-title">Susan Jim</h2>
                <p className="text-green-600">Online</p>
            </div>
            <div className="ml-20">
                <h4>❤️ Acting</h4>
            </div>
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">😄</div>
                <div className="swap-off"><FcCloseUpMode/></div>
            </label>
            <div>
                <h2 className="feature-title">Linda David</h2>
                <p className="text-green-600">Online</p>
            </div>
            <div className="ml-14">
                <h4>❤️ Gardening</h4>
            </div>
        </div>

        <div className="feature-box col-lg-4 flex">
            <label className="swap swap-flip text-5xl mr-3">
                <input type="checkbox" />
                <div className="swap-on">🙁</div>
                <div className="swap-off"><FcDislike/></div>
            </label>
            <div>
                <h2 className="feature-title">Olivar Noah</h2>
                <p>12 days ago</p>
            </div>
            <div className="ml-16">
                <h4>❤️ Football</h4>
            </div>
        </div>
        </div>
    </div>
    )
}

export default Meeting1
