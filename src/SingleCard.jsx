import { Draggable } from 'react-beautiful-dnd';

const SingleCard = ({ prod, index }) => {

    const cardStyle = {
        background: prod.done === true ? "yellow" : "red",
        width: "300px",
        textAlign: "center",
        border: "2px solid black"
    }

    return (
        <>
            <Draggable draggableId={prod.id.toString()} index={index}>
                {
                    (provided) => (
                        <div
                            style={cardStyle}
                            
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                        >
                            <h2 ><span>{prod.id}: </span>{prod.title}</h2>
                        </div>
                    )
                }
            </Draggable>
        </>
    );
};

export default SingleCard;
