import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';

const Icon = styled.div`
	color: gray;
	padding: 0.5rem 0.75rem;
`;

const IconContainer = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	font-size: inherit;
	inset: 0;
	left: revert;
	font-size: 0.9rem;
	pointer-events: none;
`;

const StyledContainer = styled.div`
	position: relative;
	border-radius: 0.25rem;
	border: 1px solid #aaa;
	flex: 1;
	min-width: 25ch;
	background: #fefefe;

	&:hover ${Icon} {
		color: #333;
	}

	&:focus-within {
		outline: 2px solid #2684ff;
		outline-offset: -1px;
	}
`;

const StyledWrapper = styled.div`
	display: flex;
	column-gap: 0.5rem;
`;

const StyledSelect = styled.select`
	appearance: none;
	width: 100%;
	font-size: inherit;
	padding: 0.5rem;
	border: none;
	background: none;

	&:focus {
		outline: none;
	}
`;

const StyledSortBy = styled.button`
	appearance: none;
	font-size: 0.9rem;
	background: #ddd;
	padding: 0.25em;
	border: none;
	border-radius: 0.25rem;
	min-width: 5ch;
	color: #222;
	flex: 0;
`;

export default function FilterDropdown({
	dataArray,
	initialData,
	onChange,
}) {
	const [filter, setFilter] = useState(
		(initialData ?? dataArray[0]).value
	);
	const [isAscending, setIsAscending] = useState(
		(initialData ?? dataArray[0]).defaultAscending
	);

	const prefix = useMemo(
		() => (isAscending ? '' : '-'),
		[isAscending]
	);

	const fullPrefix = useMemo(
		() => `${prefix}${filter}`,
		[prefix, filter]
	);

	useEffect(() => {
		onChange?.(filter);
	}, []);

	useEffect(() => {
		onChange?.(fullPrefix);
	}, [fullPrefix]);

	function handleChange(e) {
		const value = e.target.value;
		setIsAscending(
			dataArray.find((el) => el.value === value)
				.defaultAscending
		);
		setFilter(value);
	}

	return (
		<StyledWrapper>
			<StyledContainer>
				<StyledSelect
					defaultValue={initialData.value}
					onChange={handleChange}
				>
					{dataArray.map((data) => (
						<option key={data.id} value={data.value}>
							{data.label}
						</option>
					))}
				</StyledSelect>
				<IconContainer>
					<Icon>▼</Icon>
				</IconContainer>
			</StyledContainer>
			<StyledSortBy
				onClick={() => {
					return (
						filter !== '' &&
						setIsAscending((prevValue) => !prevValue)
					);
				}}
			>
				{isAscending ? (
					<>
						<strong>↗</strong>
					</>
				) : (
					<>
						<strong>↘</strong>
					</>
				)}
			</StyledSortBy>
		</StyledWrapper>
	);
}
