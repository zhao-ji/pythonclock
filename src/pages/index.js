import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>What's all this, then?</h3>
    <p>
        Python 2.7 <a href="https://www.python.org/dev/peps/pep-0373/">will not be maintained past 2020</a>.
        That date has been updated to <a href="https://github.com/python/devguide/pull/344">January 1, 2020</a>. This clock has been updated accordingly.
    </p>
    <p>
        Python 2, thank you for your years of faithful service.
    </p>
    <p>
        Life is short, why we need Python3?
    </p>
    <p>
        ECMAScript/Golang, your time is now.
    </p>
    <h3>How do i get started?</h3>
    <p>
        If the code you care about is still on Python 2, that's totally understandable.
        <br/>
        <a href="http://phylo.bio.ku.edu/content/ecmascript-python-programmers"> ECMAScript for Python programmers</a>
        <br/>
        <a href="https://golang-for-python-programmers.readthedocs.io/en/latest/"> Golang for Python programmers</a>
    </p>
  </Layout>
)

export default IndexPage
