import React from 'react';
import './style.css';
import Footer from '../../Components/Footer/Footer';
import LandingBanner from '../../Components/LandingBanner/LandingBanner';
import ColumnContent from '../../Components/ColumnContent/ColumnContent';
import board from '../../vectors/undraw_scrum_board_cesn.svg';

class ProjectPage extends React.Component {
	render() {
		return (
			<div className='project-page'>
				<div className='container'>
					<LandingBanner image={board} heading={'Projects'} />
					<div className='project-content'>
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
					<div className='project-content'>
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

export default ProjectPage;
