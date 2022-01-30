import React from 'react'
import './bloglist.css'

function BlogList() {
    return (
        <div className='bloglist'>
            <div className='depMainBack'>
                <img className='depMainImg' src="assets/department/depMain.jpg" alt="department Back" />
                <div className='depMainOverlay'>
                    <h1 className='depMainText'>Blog Posts</h1>
                </div>
            </div>


            <div className='blogListCard'>
                 <img className='blogImg' src="assets/blog/blog1.jpg" alt="Blog One" />   
                 <a href="/blog" className='blogTitle'>How technology can help you become healthy</a>
                 <div className='blogDetail'>
                    <div className='postedOn'>Posted On : <span>10 Oct 2021</span></div>
                    <div className='postedBy'>By : <span>Joy Mathew</span></div>
                    <div className='postedDep'>In : <span>Health Care</span></div>
                 </div>

                 <hr />
                 <p className='blogPara'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                 <div className='readFullBtn'><a className='readBtn' href="/blog">Read Article</a> </div>
            </div>

            <div className='blogListCard'>
                 <img className='blogImg' src="assets/blog/blog1.jpg" alt="Blog One" />   
                 <a href="/blog" className='blogTitle'>How technology can help you become healthy</a>
                 <div className='blogDetail'>
                    <div className='postedOn'>Posted On : <span>10 Oct 2021</span></div>
                    <div className='postedBy'>By : <span>Joy Mathew</span></div>
                    <div className='postedDep'>In : <span>Health Care</span></div>
                 </div>

                 <hr />
                 <p className='blogPara'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                 <div className='readFullBtn'><a className='readBtn' href="/blog">Read Article</a> </div>
            </div>

            <div className='blogListCard'>
                 <img className='blogImg' src="assets/blog/blog1.jpg" alt="Blog One" />   
                 <a href="/blog" className='blogTitle'>How technology can help you become healthy</a>
                 <div className='blogDetail'>
                    <div className='postedOn'>Posted On : <span>10 Oct 2021</span></div>
                    <div className='postedBy'>By : <span>Joy Mathew</span></div>
                    <div className='postedDep'>In : <span>Health Care</span></div>
                 </div>

                 <hr />
                 <p className='blogPara'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                 <div className='readFullBtn'><a className='readBtn' href="/blog">Read Article</a> </div>
            </div>
        </div>
    )
}

export default BlogList
