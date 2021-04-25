import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import MultiImageInput from "react-multiple-image-input";
import { adSubmitAction } from "../../../../redux/Actions/AdSubmitActions";
import { useSelector, useDispatch } from "react-redux";
import Basic from "./Basic/Basic";
import Detailed from "./Detailed/Detailed";
import Info from "./Info/Info";

const Rent = () => {
  document.getElementsByClassName("ck-voice-label").innerHTML =
    "Description(optional)";

  const { register, errors, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const [step, setStep] = useState(1);

  const handleBack = (e) => {
    e.preventDefault();
    let prev_step = step - 1;
    setStep(prev_step);
  };

  const handleNext = (data) => {
    // e.preventDefault();
    console.log(data);
    let next_step = step + 1;
    console.log(next_step, data)
    setStep(next_step);
  };

  const info = useSelector((state) => state.adsubmitreducers);

  if (info) console.log(info);
  return (
    <div className="form-main">
      <div className="container-fluid">
        <div className="form-details">
          {step === 1 && <Basic handleNext={handleNext} />}

          {step === 2 && (
            <Detailed handleNext={handleNext} handleBack={handleBack} />
          )}
          {step === 3 && (
            <Info handleNext={handleNext} handleBack={handleBack} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Rent;