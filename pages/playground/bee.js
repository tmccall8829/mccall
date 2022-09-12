import Head from 'next/head'
import Layout from '../../components/layout'

export default function SpellingBeeSolverAPI() {
    const pageTitle = 'NYTimes Spelling Bee Solver'
    return (
        <Layout>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <div>
                <h1>
                    {pageTitle}
                </h1>
            </div>
        </Layout>
    )
}