import axios from "axios";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();

  // handle submit
  const onSubmit = (data) => {
    axios.post("https://afternoon-scrubland-76608.herokuapp.com/addBlogs", data).then((res) => {
      if (res.data.insertedId) {
        alert("Blog Added Successful!!");
        reset();
      }
    });
  };
  return (
    <Container className="my-5 pt-4">
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <div className="login_form">
            <div className="login_title mb-5">
              <h3>Add New Blogs</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="m-auto">
              <label htmlFor="blog_details">
                Blog Description <span>*</span>
              </label>
              <textarea
                style={{ height: "100px", border: "1px solid #00000021", marginBottom: "12px" }}
                className="w-100 pt-2 ps-2"
                placeholder="Enter your blog description"
                id="blog_details"
                {...register("description", { required: true })}
              />

              <label htmlFor="img_link">
                Image Link <span>*</span>
              </label>
              <input placeholder="Paste your image link" id="img_link" {...register("img", { required: true })} />

              <label htmlFor="writer">
                Blog Writer <span>*</span>
              </label>
              <input id="writer" placeholder="Enter writer name" {...register("author", { required: true })} />

              <label htmlFor="writer">
                Blog Post Date <span>*</span>
              </label>
              <input defaultValue={new Date().toISOString().substring(0, 10)} {...register("date", { required: true })} />

              <Button type="submit" className="btn_banner w-100 py-3 fw-bold">
                Post Your Blogs
              </Button>
            </form>
          </div>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};

export default AddBlog;
