import $ from 'jquery';

const utils = {

	createProblem: (data) => {
    return $.ajax({
      url: '/createProblem',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data)
    });
  }

};

export default utils;