import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        axios.post(
            'http://localhost:3000/create-post',
            formData
        )
            .then((res) => {
                navigate('/feed')
            })
            .catch((err) => {
                console.error(err)
            })
    }



    return (
        <section className="create-post-section">
            <div className="color-block block-one"></div>
            <div className="color-block block-two"></div>

            <div className="create-post-card">
                <div className="post-header">
                    <span>NEW POST</span>
                    <h1>Create a New Post</h1>
                    <p>Share an image and add your thoughts.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <label className="upload-box">
                        <span className="upload-icon">↑</span>
                        <strong>Upload an image</strong>
                        <small>PNG, JPG or JPEG</small>
                        <input type="file" name="image" accept="image/*" />
                    </label>

                    <div className="caption-box">
                        <label htmlFor="caption">Caption</label>
                        <input
                            id="caption"
                            type="text"
                            name="caption"
                            placeholder="Write something..."
                            required
                        />
                    </div>

                    <button type="submit">
                        Create Post <span>→</span>
                    </button>
                </form>
            </div>
        </section>
    )
}

export default CreatePost