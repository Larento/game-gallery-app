import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';

import useFocus from '@/hooks/useFocus';

const StyledButton = styled.button`
	appearance: none;
	background: none;
	border: none;
	height: 100%;
	padding: 0.5rem 0.75rem;
	font-size: 0.9rem;
	color: gray;
	flex: 0;

	&:hover {
		color: #333;
	}
`;

const StyledDropdownButton = styled(StyledButton)``;

const MultiWrapper = styled.div`
	position: relative;
	border: 1px solid #aaa;
	min-width: 30ch;

	align-items: center;
	background: #fefefe;
	border-radius: 0.25em;
`;

const StyledMulti = styled.div`
	display: flex;
	align-items: center;

	border-radius: inherit;
	${(props) =>
		props.isOpen &&
		`outline: 2px solid #2684ff;
		outline-offset: -1px;`}

	&:focus-within ${StyledButton} {
		color: #333;
	}
`;

const StyledSelectedContainer = styled.div`
	display: flex;
	padding: 0.25rem;
	align-items: center;
	gap: 0.25rem;
	flex-wrap: wrap;
	flex: 1;
`;

const StyledSelectedItem = styled.div`
	font-size: 0.7rem;
	padding: 0.25rem 0.5rem;
	background: #ddd;
	border-radius: 0.125rem;

	column-gap: 0.5rem;
	display: flex;
	align-items: center;

	span {
		width: max-content;
	}

	button {
		font-weight: inherit;
		font-size: inherit;
		color: inherit;
		appearance: none;
		background: none;
		border: none;
	}
`;

const StyledSearch = styled.input`
	display: block;
	flex: 1;
	padding: 0.25rem 0.5rem;
	border: none;
	font-size: 1rem;
	min-width: 10ch;

	&:focus {
		outline: none;
	}
`;

const Separator = styled.span`
	width: 1px;
	background: #aaa;
	color: transparent;
	flex: 0;
`;

const StyledList = styled.div`
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
	position: absolute;
	z-index: 20;
	top: calc(100% + 10px);
	background: white;
	border: inherit;
	border-radius: inherit;
	width: 100%;
	padding: 0.25rem 0;
	box-shadow: 0 0 10px #0000000f;
	max-height: 300px;
	overflow-y: scroll;
`;

const ListElement = styled.div`
	padding: 0.5rem 0.5rem;
	user-select: none;

	&:hover {
		background: lightblue;
		cursor: pointer;
	}
`;

function SelectedItem({ onClick, children }) {
	return (
		<StyledSelectedItem>
			<span>{children}</span>
			<button onClick={onClick}>✕</button>
		</StyledSelectedItem>
	);
}

export default function SearchableDropdownMulti({
	dataArray,
	onChange,
	initialData,
}) {
	const [isFocused, setIsFocused] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [search, setSearch] = useState('');
	const [selected, setSelected] = useState(
		new Map(
			initialData.map((data) => [data.value, data.label]) ?? []
		)
	);
	const [inputRef, setInputFocus] = useFocus();

	const filteredData = useMemo(() => {
		return dataArray.filter(
			(data) =>
				data.label
					.toLowerCase()
					.includes(search.toLowerCase()) &&
				!selected.has(data.value)
		);
	}, [search, selected]);

	const hidden = useMemo(() => {
		return !isOpen || filteredData.length === 0;
	}, [isOpen, filteredData]);

	useEffect(() => {
		if (isOpen === true) {
			setInputFocus();
		}
	}, [isOpen]);

	useEffect(() => {
		onChange?.([...selected.keys()]);
	}, [selected]);

	function addItem(value, label) {
		setSelected((prevValue) => {
			prevValue.set(value, label);
			return new Map(prevValue);
		});
		setInputFocus();
	}

	function removeItem(value) {
		setSelected((prevValue) => {
			prevValue.delete(value);
			return new Map(prevValue);
		});
		setInputFocus();
	}

	function handleClear(e) {
		setSelected((prevValue) => {
			return new Map();
		});
		setInputFocus();
		setIsFocused(true);
		setIsOpen(true);
		e.stopPropagation();
	}

	function handleBlur(e) {
		if (!e.currentTarget.contains(e.relatedTarget)) {
			setSearch('');
			setIsFocused(false);
			setIsOpen(false);
		}
		e.stopPropagation();
	}

	return (
		<MultiWrapper tabIndex={-1} onBlur={handleBlur}>
			<StyledMulti
				isOpen={isFocused}
				onClick={(e) => {
					setIsFocused(true);
					setIsOpen((prevValue) => !prevValue);
				}}
			>
				<StyledSelectedContainer>
					{[...selected.entries()].map(([value, label]) => (
						<SelectedItem
							key={value}
							onClick={(e) => {
								removeItem(value);
								e.stopPropagation();
							}}
						>
							{label}
						</SelectedItem>
					))}
					<StyledSearch
						ref={inputRef}
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
							e.stopPropagation();
						}}
						placeholder="Поиск..."
					></StyledSearch>
				</StyledSelectedContainer>
				<StyledButton onClick={handleClear}>✕</StyledButton>
				<Separator>0</Separator>
				<StyledDropdownButton>▼</StyledDropdownButton>
			</StyledMulti>

			<StyledList isOpen={isFocused && !hidden}>
				{filteredData.map((data) => (
					<ListElement
						key={data.id}
						onClick={() =>
							addItem(data.value, data.label)
						}
					>
						{data.label}
					</ListElement>
				))}
			</StyledList>
		</MultiWrapper>
	);
}
