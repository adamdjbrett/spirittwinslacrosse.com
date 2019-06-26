$(document).ready(function(){
	$('#catForm').submit(function(e){
		e.preventDefault();

		$('#note').removeClass('hidden');
		$('#email').attr('disabled', true);
		$('#catButton').addClass('hidden');

		$('#note').text("Sending request... Please wait...");

		AWS.config.update({
			region: 'us-east-1',
			credentials: new AWS.CognitoIdentityCredentials({
				AccountId: '110820207274',
				RoleArn: 'arn:aws:iam::110820207274:role/Cognito_CatFactsUnauth_Role',
				IdentityPoolId: 'us-east-1:408bd1e0-2a23-4ab6-9e8d-3b33605fb7f3'
			})
		});

		var email = $('#email').val();
		var params = {
			Protocol: 'email',
			TopicArn: 'arn:aws:sns:us-east-1:110820207274:CatFacts',
			Endpoint: email
		};

		new AWS.SNS().subscribe(params, function(err, data){
			if (err){
				console.log(err, err.stack);
				$('#note').text("An error occurred when subscribing.");
			} else {
				console.log(data);
				$('#note').text("A confirmation email has now been sent.");
			}
		});

		return false;
	})
});
