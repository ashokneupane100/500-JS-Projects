const testimonials = [
    {
        name: "डॉ. रामचन्द्र अधिकारी",
        photoUrl: "https://media.istockphoto.com/id/505145335/photo/portrait-of-mature-man-talking-on-phone.jpg?s=1024x1024&w=is&k=20&c=8bHzEBMnwIhdJfpfwptNVmseBdQvwdZGbONBV9lSPHE=",
        text: "टेकजीनियस सोल्युसन्सले हाम्रो व्यवसायलाई ठूलो मद्दत गरेको छ। यो निश्चित रूपमा लगानीको योग्य हो।",
    },
    {
        name: "श्री आशिष थापा",
        photoUrl: "https://media.istockphoto.com/id/2149945112/photo/a-nepali-man-is-doing-video-chat.jpg?s=1024x1024&w=is&k=20&c=QrYSPwz8C1QjdVCf5lZTRkzYmIkLfWXMhJuTHX0wyv8=",
        text: "म टेकजीनियस सोल्युसन्सबाट प्राप्त सेवाले अत्यधिक सन्तुष्ट छु। उनीहरूको उत्कृष्टता र ग्राहक सन्तुष्टिमा प्रतिबद्धता प्रशंसनीय छ।",
    },
    {
        name: "श्री सन्देश राई",
        photoUrl: "https://media.istockphoto.com/id/1222390694/photo/young-southeast-asian-man-making-a-video-call.jpg?s=1024x1024&w=is&k=20&c=s_mKZOQ_3aNKe7l-AYPhBb2V378_dOEf9V62IywHMcE=",
        text: "उनीहरूको सेवाले हाम्रो कार्यप्रवाहलाई सुधार गरेको छ। म टेकजीनियस सोल्युसन्सलाई अत्यधिक सिफारिस गर्दछु।",
    },
    {
        name: "सुश्री सृष्टि भट्टराई",
        photoUrl: "https://media.istockphoto.com/id/1389832563/photo/happy-middle-aged-businesswoman-or-teacher-in-glasses-sit-at-home-office-typing-on-laptop-and.jpg?s=612x612&w=is&k=20&c=vSbWJWZdsXsa-2Gt3Wrw1kNqAPSrl9yXNoHbVLUzlrQ=",
        text: "टेकजीनियसका उपकरणहरू प्रयोग गर्न सजिलो छन् र यसले हाम्रो प्रक्रियाहरूलाई धेरै प्रभावकारी बनाएको छ।",
    },
    {
        name: "श्री सुरेश महतो",
        photoUrl: "https://media.istockphoto.com/id/1299798858/photo/indian-young-man-using-laptop-talking-phone.jpg?s=1024x1024&w=is&k=20&c=WfNnJQ9fPPs6FGWPMU5pcl4UDfEqy5kZF5UzhNGYTaE=",
        text: "टेकजीनियसको समर्थन टोली उत्कृष्ट छ! उनीहरू सधैं मद्दत गर्न र कुनै पनि समस्याहरूलाई चाँडै समाधान गर्न तयार छन्।",
    },
    {
        name: "सुश्री अञ्जना कंडेल",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "उनीहरूको सफ्टवेयर मलाई अत्यन्त मनपर्छ। यसले मेरो कामलाई धेरै सजिलो र रमाइलो बनाएको छ।",
    },
    {
        name: "श्री विक्रम थापा",
        photoUrl: "https://media.istockphoto.com/id/467921371/photo/men-sitting-in-mountains-holding-laptop.jpg?s=1024x1024&w=is&k=20&c=7hcHhPVygekFuAmktgyPH7McFc1Ic3tAqQvI3OINwco=",
        text: "टेकजीनियस सोल्युसन्सले हाम्रो सञ्चालनलाई सुधार गर्न मद्दत गरेको छ, र हामीले उनीहरूको सेवाहरू प्रयोग गरेदेखि उत्पादनशीलता उल्लेखनीय रूपमा वृद्धि भएको छ।",
    },
    {
        name: "सुश्री कविता रानी",
        photoUrl: "https://media.istockphoto.com/id/471551969/photo/rural-indian-women-holding-smartphone.jpg?s=1024x1024&w=is&k=20&c=qM6JjBaFPMnL8wrwlBszktYlQDFJ1x_jIo1qz0prf9g=",
        text: "उनीहरूको तालिम सत्रहरू अत्यन्त मद्दतगार थिए। म अहिले उनीहरूको सफ्टवेयर प्रयोग गर्न धेरै आत्मविश्वासी महसुस गर्छु।",
    },
    {
        name: "श्री अर्जुन मेहता",
        photoUrl: "https://media.istockphoto.com/id/1256875772/photo/young-sikh-man-stock-photo.jpg?s=1024x1024&w=is&k=20&c=mhws75M8KIwaQzNjNK_3tjfYXLJvOoBfMZwj8lqUMWo=",
        text: "टेकजीनियसले प्रदान गरेको नवप्रवर्तनकारी समाधानले हाम्रो ग्राहक संलग्नता उल्लेखनीय रूपमा सुधार गरेको छ। म अत्यधिक सिफारिस गर्दछु!",
    },
    {
        name: "सुश्री नेहा जोशी",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "टेकजीनियसबाट प्राप्त व्यक्तिगत सेवाले मलाई मनपर्छ। उनीहरू वास्तवमै आफ्ना ग्राहकहरूको बारेमा चासो राख्छन्।"
    },
    {
        name: "श्री रोहन वर्मा",
        photoUrl: "https://media.istockphoto.com/id/646951068/photo/young-man-using-cell-phone-in-remote-high-mountains-toned.jpg?s=1024x1024&w=is&k=20&c=RxLGdD31OksH2AGZQs-e3mJrTANkBkcM4yBmH2Zef8E=",
        text: "उनीहरूको ध्यान र गुणस्तरमा प्रतिबद्धता सबै कुरा स्पष्ट छ। हाम्रो व्यवसायका लागि एक शानदार साझेदार!",
    },
    {
        name: "सुश्री सिमरन कौर",
        photoUrl: "https://media.istockphoto.com/id/1412480695/photo/mature-woman-of-indian-ethnicity-taking-a-selfie-by-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=0t1LI8HdJ8PMuOcB_IHQfUghRyPC6r81jdDO9wPxpA4=",
        text: "टेकजीनियसबाट प्राप्त व्यक्तिगत सेवाले मलाई मनपर्छ। उनीहरू वास्तवमै आफ्ना ग्राहकहरूको बारेमा चासो राख्छन्।"
    },
];

// JavaScript to update testimonials
const imgEl = document.querySelector('img');
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photoUrl, text } = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text; // Corrected to use the testimonial text
    usernameEl.innerText = name;

    idx++;

    if (idx === testimonials.length) {
        idx = 0;
    }

    setTimeout(() => {
        updateTestimonial();
    }, 3000);
}
