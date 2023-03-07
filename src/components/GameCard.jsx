import { useRef, useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Card = styled.div`
	position: relative;
	border-radius: 0.5em;
	overflow: hidden;
	color: white;
	place-self: center stretch;

	@media (max-width: 500px) {
		border-radius: 0;
	}
`;

const PosterContainer = styled.div`
	isolation: isolate;
	position: relative;
	aspect-ratio: 3 / 2;
	width: 100%;

	background: #ddd;

	&::after {
		position: absolute;
		inset: 0;
		z-index: 20;
		display: block;
		content: '';
		background: radial-gradient(
			circle at bottom center,
			transparent,
			#0000000f
		);
	}
`;

const Poster = styled(Image)`
	top: 0;
	left: 0;

	overflow: hidden;
	display: block;
	object-fit: cover;
`;

const InfoContainer = styled.div`
	padding: 1.5em 2em;
	background: #222;
`;

const GamePageLink = styled.a`
	color: inherit;
	text-decoration: none;

	&:is(:hover, :active) {
		text-decoration: underline;
	}

	&:is(:visited, :active) {
		color: inherit;
	}
`;

export default function GameCard({
	name,
	slug,
	rating,
	released,
	posterURL,
}) {
	const releaseDate = useRef(new Date(released));
	const dateStr = releaseDate.current.toLocaleDateString('ru-RU', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});

	const [src, setSrc] = useState(posterURL);

	return (
		<Card>
			<PosterContainer>
				<Poster
					src={src ?? '/fallback.png'}
					alt={name}
					fill
					onError={() => setSrc('/fallback.png')}
					sizes="(max-width: 768px) 100vw,
					(max-width: 1200px) 50vw,
					33vw"
				/>
			</PosterContainer>
			<InfoContainer>
				<h2>
					<GamePageLink href={`/game/${slug}`}>
						{name}
					</GamePageLink>
				</h2>
				<p>
					Рейтинг:{' '}
					<span>
						<strong>
							{rating === 0 ? 'N/A' : rating}
						</strong>
					</span>
				</p>
				<p>
					Дата выхода:{' '}
					<span>
						<strong>{dateStr}</strong>
					</span>
				</p>
			</InfoContainer>
		</Card>
	);
}
