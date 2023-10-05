import { Draggable } from 'react-beautiful-dnd';

const SingleCard = ({ prod, index }) => {

    return (
        <>
            <Draggable draggableId={prod.id.toString()} index={index}>
                {
                    (provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                        >
                            <h2 style={{
                                background: prod.done === true ? "yellow" : "red",
                                width: "300px",
                                textAlign: "center",
                                border: "2px solid black",
                                height:"50px",
                                display:"flex",
                                alignItems:"center",
                                justifyContent:"center",
                                borderRadius:"10px"
                            }}><span>{prod.id}: </span>{prod.title}</h2>
                        </div>
                    )
                }
            </Draggable>
        </>
    );
};

export default SingleCard;
