import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center'>Blogs</h2><div className='underline mb-5'></div>
            <div>
                <h4>1. Difference between javascript and node js?</h4>
                <h6><strong>JavaScript: </strong> JavaScript is a programming language that runs in any browser with helps of javaScript Engine. JavaScript is normally used for any client-side activity for web application. <br />
                <strong>Node JS: </strong>Node js is an interpreter or running environment for a javascript programming language. Node JS only run in a V8. It mainly used for accessing or performing any non-blocking operation of any operating system
                </h6><br />

                <h4>2. When should you use nodejs and when should you use mongodb?</h4>
                <h6>MongoDB is a database and NodeJs helps us to connect our client site to database by it's server site.
                    <br />
                <strong>nodejs: </strong>It's used for traditional web sites and back-end API services. it's not for larger web application. <br />
                <strong>mongodb: </strong>MongoDb are NoSQL database MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database.
                </h6><br />

                <h4>3. Differences between sql and nosql databases?</h4>
                <h6>
                    <strong>SQL: </strong>SQL databases are relational. SQL databases use structured query language and have a predefined schema. SQL databases are vertically scalable. SQL databases are table-based<br />
                    <strong>NoSQL: </strong>NoSQL databases are non-relational. NoSQL databases have dynamic schemas for unstructured data. NoSQL databases are horizontally scalable. NoSQL databases are document, key-value, graph, or wide-column stores.
                </h6><br />

                <h4>4. What is the purpose of jwt and how does it work?</h4>
                <h6>
                   <strong>Purpose: </strong>jwt or JSON Web Token is an open standard used to share security information between two parties a client and a server. <br />
                   <strong>How: </strong>this token has three part header, payloadn signature. jwt differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand.
                </h6><br />
            </div>
        </div>
    );
};

export default Blogs;