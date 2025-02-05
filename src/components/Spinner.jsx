import ClipLoader from "react-spinners/ClipLoader";
const override = { display: "block", margin: "100px auto" };

const Spinner = ({ loading }) => {
  return (
    <ClipLoader color="#4338CA" loading={loading} cssOverride={override} />
  );
};
export default Spinner;
