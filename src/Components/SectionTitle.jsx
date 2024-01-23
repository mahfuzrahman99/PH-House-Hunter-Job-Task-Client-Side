/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-6/12 my-3 md:my-8">
            <p className="text-[#038882] mb-2">*** {subHeading} *** </p>
            <h3 className=" text-xl md:text-3xl font-semibold uppercase border-[#00938a] border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;