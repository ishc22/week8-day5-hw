import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
    return (
        <div className="card mt-3">
            <div className="row g-0">
                <div className=" col-4">
                    <div className="card-body">
                        <h6 className="card-subtitle text-muted">{ post.date_created }</h6>
                        <h4 className="card-title">{ post.title }</h4>
                        <h6 className="card-subtitle">Id: { post.id }</h6>
                        <h5 className="card-subtitle"> By: { post.author.username }</h5>
                        <p className="card-text">{ post.content }</p>
                        <Link className='btn btn-warning mx-3' to={`/posts/${post.id}`}>See More</Link>
                        <Link className='btn btn-success mx-3' to={`/posts/${post.id}`}>Edit</Link>
                        <Link className='btn btn-danger mx-3' to={`/posts/${post.id}`}>Delete</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
