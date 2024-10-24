import clsx from 'clsx'
import React from 'react'

const ItemLayout = ({children, className}) => {
    return (
    <div 
    className={clsx(
        'custom-bg p-8 rounded-xl flex items-center justify-center space-y-8', 
    className
    )}
    >
        {children}
    </div>
    )
}

const AboutDetails = () => {
  return (
    <section className='py-20 w-full'>
        <div className='grid grid-cols-12 gap-8 w-full'>
            <ItemLayout className={'col-span-8 row-span-2 flex-col items-start hover:border-accent'}>
            <h2 className='text-2xl text-left w-full capitalize'>
                Software Engineer
            </h2>
            <p className='font-light'>
                My journey into web development began when I decided I wanted to do something 
                meaningful with my life. I decided to learn coding and bring my ideas to life. 
                Starting with the basics of HTML, CSS, and JavaScript, I went all-in on the 
                learning process, and fell in love. Now every day, I strive to be 1% better 
                than the person I was yesterday. I challenge myself to learn and grow, not just
                as a programmer but also as an individual. Thank you for stopping by and join me 
                as I look to shape the future of the web.
            </p>
            </ItemLayout>

            <ItemLayout className={'col-span-4 text-accent hover:border-accent'}>
            <p className='font-semibold w-full text-left text-5xl'>
                10+ <sub className='font-semibold text-base'>clients</sub>
            </p>
            </ItemLayout>

            <ItemLayout className={'col-span-4 text-accent hover:border-accent'}>
            <p className='font-semibold w-full text-left text-5xl'>
                1+ <sub className='font-semibold text-base'>years of experience</sub>
            </p>
            </ItemLayout>

            <ItemLayout className={'col-span-4 !p-0 hover:border-accent'}>
                <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/top-langs/?username=itsyoungeun&theme=transparent&hide_border=true&title_color=ffffff&text_color=ffffff&text_bold=false" alt="Youngeun" loading="lazy" />
            </ItemLayout>

            <ItemLayout className={'col-span-8 !p-0 hover:border-accent'}>
                <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api?username=itsyoungeun&theme=transparent&hide_border=true&title_color=ffffff&text_color=ffffff&text_bold=false" alt="Youngeun" loading="lazy" />
            </ItemLayout>

            <ItemLayout className={'col-span-full hover:border-accent'}>
                <img className='w-full h-auto' src="https://skillicons.dev/icons?i=aws,bootstrap,codepen,cs,css,discord,figma,git,github,html,java,jquery,js,matlab,nextjs,nodejs,npm,powershell,py,pycharm,react,redux,regex,sass,stackoverflow,tailwind,threejs,unity,windows,vscode" alt="Youngeun" loading="lazy" />
            </ItemLayout>

            <ItemLayout className={'col-span-6 !p-0 hover:border-accent'}>
                <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=itsYoungeun&theme=dark&background=EB545400&ring=FFFFFF&currStreakLabel=FFFFFF" alt="Youngeun" loading="lazy" />
            </ItemLayout>

            <ItemLayout className={'col-span-6 !p-0 hover:border-accent'}>
                <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/pin/?username=itsYoungeun&repo=QA-Wolf&theme=transparent&hide_border=true&title_color=ffffff&text_color=ffffff&text_bold=false&description_lines_count=2" alt="Youngeun" loading="lazy" />
            </ItemLayout>
        </div>
    </section>
  )
}

export default AboutDetails