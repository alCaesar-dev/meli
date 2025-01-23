import * as ReactHelmet from 'react-helmet-async';

const MetaTags = ({description, keywords, ogTitle}) => {
    return (
        <ReactHelmet.Helmet>
            <meta name="author" content="Mercado Libre S.R.L"/>
            <meta property="og:type" content="website"/>
            <meta property="robot" content={"index, follow"}/>

            {description && <meta name="description" content={description}/>}
            {keywords && <meta name="keywords" content={keywords}/>}
            {ogTitle && <meta name="og:title" content={ogTitle}/>}
            {description && <meta name="og:description" content={description}/>}
        </ReactHelmet.Helmet>
    );
}

export default MetaTags;