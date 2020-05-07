import React from 'react';
import './style.css';
import Footer from '../../Components/Footer/Footer';
import LandingBanner from '../../Components/LandingBanner/LandingBanner';
import ColumnContent from '../../Components/ColumnContent/ColumnContent';
import team from '../../vectors/undraw_team_spirit_hrr4.svg';

class About extends React.Component {
	render() {
		return (
			<div className='about-page'>
				<div className='container'>
					<LandingBanner image={team} heading={'About'}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio totam
						ut, porro suscipit libero excepturi similique eligendi voluptas
						assumenda sunt repellat ipsum magni corrupti impedit quam eaque
						veritatis numquam doloremque.
					</LandingBanner>
					<h1>What we do ?</h1>
					<div className='about-content'>
						<ColumnContent number={'01'} heading={'Lorem, Ipsum.'}>
							{' '}
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
							minus, quasi omnis laborum dolore ab officia nihil! Maxime
							debitis, architecto officiis dolores sapiente veniam possimus
							repudiandae ex nisi earum cumque.Laborum repudiandae voluptatem,
							labore nemo quis voluptate aliquid eveniet consequatur delectus
							nostrum impedit similique magnam deserunt iste incidunt sint sed
							non tempore. Dolor praesentium aliquid aut et provident? Pariatur,
							alias.{' '}
						</ColumnContent>
						<ColumnContent
							className='column2'
							number={'01'}
							heading={'Lorem, Ipsum.'}
						>
							{' '}
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
							minus, quasi omnis laborum dolore ab officia nihil! Maxime
							debitis, architecto officiis dolores sapiente veniam possimus
							repudiandae ex nisi earum cumque.Laborum repudiandae voluptatem,
							labore nemo quis voluptate aliquid eveniet consequatur delectus
							nostrum impedit similique magnam deserunt iste incidunt sint sed
							non tempore. Dolor praesentium aliquid aut et provident? Pariatur,
							alias.{' '}
						</ColumnContent>
						<ColumnContent number={'01'} heading={'Lorem, Ipsum.'}>
							{' '}
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
							minus, quasi omnis laborum dolore ab officia nihil! Maxime
							debitis, architecto officiis dolores sapiente veniam possimus
							repudiandae ex nisi earum cumque.Laborum repudiandae voluptatem,
							labore nemo quis voluptate aliquid eveniet consequatur delectus
							nostrum impedit similique magnam deserunt iste incidunt sint sed
							non tempore. Dolor praesentium aliquid aut et provident? Pariatur,
							alias.{' '}
						</ColumnContent>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default About;
