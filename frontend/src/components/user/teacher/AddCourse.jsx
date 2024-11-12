import React, { useState, useContext } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import { UserContext } from "../../../App";
import axiosInstance from "../../common/AxiosInstance";

const AddCourse = () => {
  const user = useContext(UserContext);
  const [addCourse, setAddCourse] = useState({
    userId: user.userData._id,
    C_educator: "",
    C_title: "",
    C_categories: "",
    C_price: "",
    C_description: "",
    sections: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddCourse({ ...addCourse, [name]: value });
  };

  const handleCourseTypeChange = (e) => {
    setAddCourse({ ...addCourse, C_categories: e.target.value });
  };

  const addInputGroup = () => {
    setAddCourse({
      ...addCourse,
      sections: [...addCourse.sections, { S_title: "", S_description: "", S_content: null }],
    });
  };

  const handleChangeSection = (index, e) => {
    const updatedSections = [...addCourse.sections];
    const { name, value, files } = e.target;
    updatedSections[index] = { ...updatedSections[index], [name]: files ? files[0] : value };
    setAddCourse({ ...addCourse, sections: updatedSections });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("userId", addCourse.userId);
      formData.append("C_educator", addCourse.C_educator);
      formData.append("C_title", addCourse.C_title);
      formData.append("C_categories", addCourse.C_categories);
      formData.append("C_price", addCourse.C_price);
      formData.append("C_description", addCourse.C_description);

      addCourse.sections.forEach((section, index) => {
        formData.append(`sections[${index}][S_title]`, section.S_title);
        formData.append(`sections[${index}][S_description]`, section.S_description);
        if (section.S_content) {
          formData.append(`S_content`, section.S_content);
        }
      });

      const token = localStorage.getItem("token");
      const response = await axiosInstance.post("/api/user/addcourse", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        alert("Course created successfully!");
        setAddCourse({
          userId: user.userData._id,
          C_educator: "",
          C_title: "",
          C_categories: "",
          C_price: "",
          C_description: "",
          sections: [],
        });
      } else {
        alert("Failed to create course. " + response.data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while creating the course.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group controlId="C_educator">
            <Form.Label className="form-label">Educator Name</Form.Label>
            <Form.Control
              type="text"
              name="C_educator"
              value={addCourse.C_educator}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="C_title">
            <Form.Label className="form-label">Course Title</Form.Label>
            <Form.Control
              type="text"
              name="C_title"
              value={addCourse.C_title}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row><br/>

      <Form.Group controlId="C_categories">
      <Form.Label className="form-label">Category</Form.Label>
<Form.Select value={addCourse.C_categories} onChange={handleCourseTypeChange}>
  <option>Select Category</option>
  <option>Software</option>
  <option>Sports</option>
  <option>Self Development</option>
  <option>Programming</option>
  <option>Design</option>
  <option>Business & Finance</option>
  <option>Marketing</option>
  <option>AI & Machine Learning</option>
  <option>Health & Fitness</option>
  <option>Photography</option>
  <option>Music</option>
  <option>Language</option>
  <option>Art & Craft</option>
  <option>Cooking</option>
  <option>Leadership</option>
</Form.Select>

      </Form.Group><br/>

      <Form.Group controlId="C_price">
        <Form.Label className="form-label">Price</Form.Label>
        <Form.Control
          type="text"
          name="C_price"
          value={addCourse.C_price}
          onChange={handleChange}
        />
      </Form.Group><br/>

      <Form.Group controlId="C_description">
        <Form.Label className="form-label">Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="C_description"
          value={addCourse.C_description}
          onChange={handleChange}
        />
      </Form.Group><br/>

      {addCourse.sections.map((section, index) => (
        <div key={index}>
          <Form.Group controlId={`S_title_${index}`}>
            <Form.Label className="form-label">Section Title</Form.Label>
            <Form.Control
              type="text"
              name="S_title"
              value={section.S_title}
              onChange={(e) => handleChangeSection(index, e)}
            />
          </Form.Group><br/>

          <Form.Group controlId={`S_description_${index}`}>
            <Form.Label className="form-label">Section Description</Form.Label>
            <Form.Control
              type="text"
              name="S_description"
              value={section.S_description}
              onChange={(e) => handleChangeSection(index, e)}
            />
          </Form.Group><br/>

          <Form.Group controlId={`S_content_${index}`}>
            <Form.Label className="form-label">Upload Content</Form.Label>
            <Form.Control
              type="file"
              name="S_content"
              onChange={(e) => handleChangeSection(index, e)}
            />
          </Form.Group><br/>
        </div>
      ))}
<br/>
      <Button onClick={addInputGroup} style={{color:"#201E43",backgroundColor:"#eeee",fontWeight:"bold",border:"none"}}>Add Section</Button>
      <Button type="submit" style={{ marginLeft: "1rem",color:"#201E43",backgroundColor:"#eeee",fontWeight:"bold",border:"none"}}>Submit</Button>
    </Form>
  );
};

export default AddCourse;
