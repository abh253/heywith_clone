import party from '../data/logo/party.svg'
import React from 'react'
import profilesImg from '../data/images/profiles.png'
import Result from '../data/logo/Result'
const HomeCom6 = () => {
    return (
        <section className='home-com-6'>
            <article className='home-com-6-text'>
                <img src={party} alt="" />
                <h2>Ready to generate revenue through social media?</h2>
                <p>Create an account to get early access to use HeyWith</p>
                <button type='button'>Create your profile</button>
                <button   type='button'>Demo profile <Result/></button>
            </article>
            <article className='home-com-6-img'>
            </article>
        </section>
    )
}
 
export default HomeCom6
