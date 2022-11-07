import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
      <Head>
          <title>Viztech Systems | A Hiring Platform</title>
          <meta charset="UTF-8" lang='en'/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="description" content="Viztech Systems is a candidate hiring platform. A Place That Helps You To Reach Your Destiny. We do recruitment right here. We link you to the right people." />
          <meta property='og:title' content='Viztech Systems | A Hiring Platform' />
          <meta property='og:description' content="Viztech Systems is a candidate hiring platform. A Place That Helps You To Reach Your Destiny" />
          <meta name="keywords" content="Employee, Job, Candidate, Hiring, HR, Recruitment, Company, IT Company" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
          <link rel="shortcut icon" href="/viztech-favicon-16x16.png" sizes='any' type="image/x-icon" />
          <link rel="apple-touch-icon" href="/viztech-favicon-16x16.png" sizes='152x152' type="image/x-icon" />
          <link rel="mask-icon" href="/viztech-favicon-16x16.png" type="image/x-icon" color='#000000' />
      </Head>
      <header>
        <Navbar/>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default Layout