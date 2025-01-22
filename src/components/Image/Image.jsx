import React, {useState} from 'react';
import styles from "./Image.module.scss";

const Image = ({src, alt = "", className, ...props}) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <section className={styles.container}>
            {isLoading && <div className={className}></div>}
            <img
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                className={className}
                style={{display: isLoading ? 'none' : 'block'}}
                {...props}
            />
        </section>
    );
}

export default Image;
