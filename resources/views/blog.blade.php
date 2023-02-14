<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Install and Use CKEditor In Laravel</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <style>
        p{
            width: 100%;
        }
        img {
            display: block;
            max-width: 100% !important;
            margin :auto !important;
            height: auto !important;

            
        }
    </style>
</head>
<body>
    <div class="container">
        @foreach($data as $data)
        <div class="shadow mb-3">
            <div class="col-md-10  mt-4 ">
                {{$data->title}} 
              </div>
              <div><?php echo $data->description  ?>   </div>
        </div>
        @endforeach
            
    </div>
</body>

</html>
