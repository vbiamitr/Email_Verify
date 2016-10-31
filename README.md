# Email_Verify
Email Verification Application

Single page web application to upload excel file with emails that needs to be verified. Once verification is done, csv file with original excel file data and an additional column holding the verification information gets downloaded.

API from http://verify-email.org/ is used to verify email.

As the verify-email.org's API does not allow Cross Domain Requests, a Node REST API is used to send request to verify-email.org's API. Hence the front-end sends request to Node API and then Node sends request to verify-email.org's API and the response is relayed to front-end.
