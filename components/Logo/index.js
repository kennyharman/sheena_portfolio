import styles from './Logo.module.css'
import Image from 'next/image'

export default function Logo() {
  return(
    <div className={styles.logo_container}>
      <div className={styles.logo_wrapper}>
        <div className={styles.fog_container_left}>
          <Image
            className={styles.fog}
            src="/images/logo_svgs/cloud-01_left_color.svg"
            alt="fog"
            width={400}
            height={400}
            objectFit="contain"
          />
                  <Image
            className={styles.fog}
            src="/images/logo_svgs/cloud-02_left_color.svg"
            alt="fog"
            width={400}
            height={400}
            objectFit="contain"
          />
                  <Image
            className={styles.fog}
            src="/images/logo_svgs/cloud-03_left_color.svg"
            alt="fog"
            width={400}
            height={400}
            objectFit="contain"
          />
                  <Image
            className={styles.fog}
            src="/images/logo_svgs/cloud-04_left_color.svg"
            alt="fog"
            width={400}
            height={400}
            objectFit="contain"
          />
                  <Image
            className={styles.fog}
            src="/images/logo_svgs/cloud-05_left_color.svg"
            alt="fog"
            width={400}
            height={400}
            objectFit="contain"
          />
        </div>
        <div className={styles.ghost_container}>
          <Image 
            className={styles.sheena_glasses}
            src="/images/logo_svgs/sheena.svg"
            alt="sheena glasses"
            width={200}
            height={300}
            objectFit="contain"
          />
        </div>
        <div className={styles.fog_container_right}>
          <Image
            className={styles.fog_02}
            src="/images/logo_svgs/cloud-01_right_color.svg"
            alt="fog"
            width={400}
            height={400}
            objectFit="contain"
          />
                  <Image
            className={styles.fog_02}
            src="/images/logo_svgs/cloud-02_right_color.svg"
            alt="fog"
            width={400}
            height={400}
            objectFit="contain"
          />
                  <Image
            className={styles.fog_02}
            src="/images/logo_svgs/cloud-03_right_color.svg"
            alt="fog"
            width={400}
            height={400}
            objectFit="contain"
          />
                  <Image
            className={styles.fog_02}
            src="/images/logo_svgs/cloud-04_right_color.svg"
            alt="fog"
            width={400}
            height={400}
            objectFit="contain"
          />
                  <Image
            className={styles.fog_02}
            src="/images/logo_svgs/cloud-05_right_color.svg"
            alt="fog"
            width={400}
            height={400}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
};