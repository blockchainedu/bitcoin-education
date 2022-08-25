import { useEffect, useState } from 'react'
import MobileNav from "./mobileNav"
import Head from 'next/head'
import Dropdown from "./dropdown"
import StandardButton from './standardButton'

export default function HeaderWithLogo({className="", children}) {
  const [ offset, setOffset ] = useState(0)
  const logoSrc = `/images/ben-logo-color-no-slogan.svg`
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <section className={`py-10 px-7 sticky top-0 z-10 white-header header ${ offset > 100 ? "scrolled" : "" } ${className}`}>
      <Head>
        <link rel="shortcut icon" href="" />
      </Head>
      <div className="flex lg:hidden mobile-nav float-right h-[40px] items-center">
        { children }
        { !children && <MobileNav /> }
      </div>
      <nav className="flex max-w-7xl m-auto justify-between items-start lg:items-center relative">
        <div className="w-2/12 lg:w-1/3 left-0"> <a href="/"><img className="w-24 mx-auto max-w-none" src={logoSrc} /></a> </div>
        <ul className={`font-mont text-black w-10/12 ${className}`}>
          <li className="flex gap-x-14 justify-end items-center">
            <a className="font-semibold" href="/learn">Learn</a>
            <a className="font-semibold" href="/contact">Contact </a>
            { offset > 100 && <>
                <StandardButton
                  link="/donate"
                  text="Donate"
                  styling="hidden display-on-scroll text-center py-3 rounded-lg w-full px-8"
                />
                <StandardButton
                  link="https://learn.blockchainedu.org"
                  text="Sign Up"
                  color="orange"
                  styling="hidden display-on-scroll text-center py-3 rounded-lg w-full px-8"
                />
              </>
            }
            <a className="px-4 font-semibold underline hidden-on-scroll" target="_blank" href="/donate">Donate </a>
            <a className="px-4 font-semibold underline hidden-on-scroll" target="_blank" href="https://learn.blockchainedu.org">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </section>
  )
}
