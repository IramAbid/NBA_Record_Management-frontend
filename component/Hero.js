import styles from "../styles/hero.module.css"

const Hero = () => {
    return (
        <div className={styles.hero_container}>
            <div className={styles.logo_container}>
                <img src="/logo.jpeg" alt="logo"  />
            </div>
            <div className={styles.details}>
                <h1>NBA Record management system</h1>
                <h3>Self-Service Intranet Portal of AMU is envisaged to be the one stop portal for all the services being rendered to various sections of AMU ICT-Users Community. At present services being offered from Computer Centre are being provisioned in this release of AMU Intranet Portal. Suggestions/feedback for enhancement are welcome from all.</h3>
            </div>
            <div>
                button
            </div>

        </div>
    )
}

export default Hero