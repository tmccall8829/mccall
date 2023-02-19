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
		        <p>
	    	        Come back later, I'll be ready soon! In the meantime, check out the source on <a href="https://github.com/tmccall8829/NYT-Spelling-Bee-Solver">Github</a>.
	    	    </p>
            </div>
        </Layout>
    )
}
