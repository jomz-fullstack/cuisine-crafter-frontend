import React from "react"
import { useParams } from "react-router-dom"


const ReviewShow = ({ reviews }) => {
    const { id } = useParams()
    let selectedReview = reviews?.find((review) => review.id === +id)

    return(
        <div>
            {selectedReview && (
                <>
                    <h1>{selectedReview.header}</h1>
                    <h2>{selectedReview.stars}</h2>
                    <h3>{selectedReview.body}</h3>
                </>
            )}


        </div>

    )
}

export default ReviewShow
