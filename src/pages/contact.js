import React from 'react'
import Layout from '../components/layout'
// import { useStaticQuery, graphql } from "gatsby"
import '../styles/contact.css'
// import Header from '../components/header'
// import Footer from '../components/footer'

const Contact = () => {
    return (
        <Layout>
            <div className="contact-wrapper">
                <div className="contact-container">
                    <div style={{
                        marginLeft: '5rem'
                    }}>
                        <p>Eli Bensusan</p>
                    </div>
                    <div style={{
                        marginLeft: '5rem',
                        marginBottom: '1rem'
                    }}>
                        <a rel="noreferrer" href="eli@neferka.design">eli@neferka.design</a>
                    </div>
                    <div style={{
                        marginLeft: '5rem',
                        marginBottom: '1rem'
                    }}>
                        <a rel="noreferrer" href="https://www.linkedin.com/in/eli-bensusan-934a8024">LinkedIn</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default Contact



// const Contact = () => {
//     const data = useStaticQuery(graphql`
//     query AnotherSiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//     return (
//         <>
//             <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
//             <div className="contact-wrapper">
//                 <div className="contact-container">
//                     <div style={{
//                         marginLeft: '1rem'
//                     }}>
//                         <p>Eli Bensusan</p>
//                     </div>
//                     <div style={{
//                         margin: '1rem'
//                     }}>
//                         <a rel="noreferrer" href="eli@neferka.design">eli@neferka.design</a>
//                     </div>
//                     <div style={{
//                         margin: '1rem'
//                     }}>
//                         <a rel="noreferrer" href="https://www.linkedin.com/in/eli-bensusan-934a8024">LinkedIn</a>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }