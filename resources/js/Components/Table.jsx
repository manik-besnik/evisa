export const Table = ({heading = [], children}) => {
    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                <tr>
                    {heading.map((item, i) => (
                        <th key={i}>{item}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {children}
                </tbody>
            </table>
        </div>
    )
}

export default Table;
