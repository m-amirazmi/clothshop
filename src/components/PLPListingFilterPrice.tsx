import React, { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import { priceSet } from "../redux/features/plpFilterSlice";
import { RootState } from "../redux/store";
import styles from "../scss/modules/plplistingfilterprice.module.scss";

interface IPLPListingFilterPriceProps {}

const PLPListingFilterPrice: React.FunctionComponent<IPLPListingFilterPriceProps> = (props) => {
	const [show, setShow] = useState(true);
	const [range, setRange] = useState({
		min: 0,
		max: 1000,
	});

	const { currency } = useSelector((state: RootState) => state.currency);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(priceSet(range));
	}, [range]);

	const handlePriceRange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		if (+target.value < 0) setRange({ ...range, [target.name]: 0 });
		else setRange({ ...range, [target.name]: +target.value });
	};

	return (
		<div className={styles.filter}>
			<div className={styles.filterName} onClick={() => setShow(!show)}>
				<p className="mb-0">Price</p>
				{show ? <FiChevronUp /> : <FiChevronDown />}
			</div>
			{show && (
				<>
					<div className="d-flex mt-4 align-items-center gap-3">
						<div className={styles.inputContainer}>
							<Input type="number" placeholder="0" className="px-0" name="min" value={range.min} onChange={handlePriceRange} />
							<div className={styles.symbol}>{currency.symbol}</div>
						</div>
						<p className="mb-0">to</p>
						<div className={styles.inputContainer}>
							<Input type="number" placeholder="1000" className="px-0" name="max" value={range.max} onChange={handlePriceRange} />
							<div className={styles.symbol}>{currency.symbol}</div>
						</div>
					</div>
					<div className={styles.prices}>
						<p>Show Products With Prices Between: </p>
						<div className={styles.tag}>
							{currency.symbol}
							{range?.min.toFixed(2)} - {currency.symbol}
							{range?.max.toFixed(2)}
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default PLPListingFilterPrice;
