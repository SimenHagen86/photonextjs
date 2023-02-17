import Head from 'next/head'
import Image from 'next/image'
import { Expletus_Sans } from '@next/font/google'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import Masonry from 'react-masonry-css'
import classNames from 'classnames'

import ocean1 from '../public/ocean1.jpeg'
import ocean2 from '../public/ocean2.jpeg'
import ocean3 from '../public/ocean3.jpeg'
import ocean4 from '../public/ocean4.jpeg'
import ocean5 from '../public/ocean5.jpeg'
import ocean6 from '../public/ocean6.jpeg'

const tabs = [
  {
    key: 'all',
    display: 'All',
  },
  {
    key: 'oceans',
    display: 'Oceans',
  },
  {
    key: 'forests',
    display: 'Forests',
  },
]

const images = []

export default function Home(): JSX.Element {
  return (
    <div className="h-full bg-[url('/photographer-bg.jpg')] bg-top bg-cover overflow-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="fixed  top-0 w-full z-10 flex justify-between items-center h-[90px] px-10">
        <span className="uppercase text-lg font-medium">
          Photography Portfolio
        </span>

        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>
      <main className="pt-[110px]">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12 ">
              {tabs.map((tab) => (
                <Tab className={'p-2'} key={tab.key}>
                  {({ selected }) => (
                    <span
                      className={classNames(
                        'uppercase text-lg',
                        selected ? 'text-white' : 'text-stone-600'
                      )}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="h-full  max-w-[900px] w-full p-2 sm:p-4 my-6 ">
              <Tab.Panel>
                <Masonry
                  breakpointCols={2}
                  columnClassName=""
                  className="flex gap-4 "
                >
                  <Image src={ocean1} alt="placeholder" className="mb-4" />
                  <Image src={ocean2} alt="placeholder" className="mb-4" />
                  <Image src={ocean3} alt="placeholder" className="mb-4" />
                  <Image src={ocean4} alt="placeholder" className="mb-4" />
                  <Image src={ocean5} alt="placeholder" className="mb-4" />
                  <Image src={ocean6} alt="placeholder" className="mb-4" />
                  {/* <img src="/ocean1.jpeg" alt="ocean1" className="mb-4" />
                  <img src="/ocean2.jpeg" alt="ocean2" className="mb-4" />
                  <img src="/ocean3.jpeg" alt="ocean3" className="mb-4" />
                  <img src="/ocean4.jpeg" alt="ocean4" className="mb-4" />
                  <img src="/ocean5.jpeg" alt="ocean5" className="mb-4" />
                  <img src="/ocean6.jpeg" alt="ocean6" className="mb-4" /> */}
                </Masonry>
              </Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forests</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[90px] flex justify-center items-center uppercase text-lg font-medium">
        <p>Photography portfolio</p>
      </footer>
    </div>
  )
}
