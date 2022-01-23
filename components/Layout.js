import Head from "next/head";

function Layout({ title, keywords, desc, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
      </Head>

      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: "Kaizn Digital | Web Consultancy, Design & Marketing",
  desc: "One stop solution for your digital needs",
  keywords:
    "SEO, Website, Design, Development, Front End, Back End, API, CMS, Webdev, Developer",
};

export default Layout;
