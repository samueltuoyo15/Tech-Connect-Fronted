interface GenderCheckboxProps {
  gender: string;
  setGender: (value: string) => void;
}

const GenderCheckbox: React.FC<GenderCheckboxProps> = ({gender, setGender}) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Male</span>
					<input type='radio'
					name="gender"
					value="male"
					checked={gender === "male"}
					onChange={(e) => setGender(e.target.value)}
					className='cursor-pointer radio border-slate-900' />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text'>Female</span>
					<input type='radio'
					name="gender"
					value="female"
					checked={gender === "female"}
					onChange={(e) => setGender(e.target.value)}
					className='cursor-pointer radio border-slate-900' />
				</label>
			</div>
		</div>
	);
};
export default GenderCheckbox;