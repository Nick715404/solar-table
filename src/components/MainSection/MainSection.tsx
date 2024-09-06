import styles from './styles.module.scss';

export const MainSection = () => {
	return (
		<section className={styles.section}>
			<div className='container'>
				<div className={styles.wrapper}>
					<h1 className={styles.title}>Data Table</h1>
					<p className={styles.text}>
						You will see some data here <br /> when you login.
					</p>
				</div>
			</div>
		</section>
	);
};
