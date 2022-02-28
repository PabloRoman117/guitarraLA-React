import React from 'react';
import Image from 'next/image'
import Layout from '../components/Layout';
import styles from '../styles/Nosotros.module.css';
const Nosotros = () => {
  return(
   
        <Layout
        pagina="Nosotros ">
           <main className='contenedor '>
                <h2 className='heading'> Nosotros</h2>
                <div className={styles.contenido} >
                  <Image className='animate__animated animate__fadeInLeft' layout='responsive' width={600} height={450} src="/img/nosotros.jpg"  alt='imagen sobre nosotros'/>
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum augue sem, 
                      at bibendum eros luctus et. Integer efficitur quam aliquet velit convallis, non commodo
                       ex posuere. Suspendisse elementum vulputate sem, rutrum vestibulum lectus tempus 
                       vestibulum. Vestibulum lobortis eget velit vel pharetra. Maecenas imperdiet enim ac 
                       tortor commodo feugiat. Sed pretium pretium elit eu ullamcorper. In ut laoreet urna.
                        Duis ultrices ornare diam. Aliquam ut orci ut lorem iaculis sollicitudin. Praesent 
                        luctus, est ac ullamcorper laoreet, dolor quam convallis sem, fermentum tempor massa 
                        metus in magna. Nullam posuere arcu quis dolor luctus, sit amet auctor nisl varius. 
                        In vitae turpis tempor, cursus lectus vehicula, scelerisque purus. Integer est justo, 
                        placerat nec lorem quis, dapibus varius lorem.
                    </p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum augue sem, 
                      at bibendum eros luctus et. Integer efficitur quam aliquet velit convallis, non commodo
                       ex posuere. Suspendisse elementum vulputate sem, rutrum vestibulum lectus tempus 
                       vestibulum. Vestibulum lobortis eget velit vel pharetra. Maecenas imperdiet enim ac 
                       tortor commodo feugiat. 
                    </p>

                  </div>
                </div>
           </main>
        </Layout>
  ) 
}

export default Nosotros;
