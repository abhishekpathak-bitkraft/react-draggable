import SingleCard from "./SingleCard";
import { Droppable } from "react-beautiful-dnd";

const divWrapper = {
    display: "flex",
    gap: "10px",
    width: "50vw",
    height: "50vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "pink",
    padding: "3rem 0",
    borderRadius: '10px'
};

const Project = ({ data }) => {


    return (
        <>
            <Droppable droppableId="allDops">
                {(provided) => (
                    <div style={divWrapper}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <div>
                            {data && data.map((prod, index) => (
                                <SingleCard key={prod.id} prod={prod} index={index} />
                            ))}
                        </div>
                        {
                            provided.placeholder
                        }
                    </div>
                )}
            </Droppable>
        </>
    );
};
export default Project;
