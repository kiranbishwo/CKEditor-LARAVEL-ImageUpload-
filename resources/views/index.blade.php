<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Install and Use CKEditor In Laravel</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css">
    <style>
        img {
            max-width: 100%;
            height: auto !important;
        }
    </style>
</head>
<body>
    <div class="container">
            <div class="col-md-10  mt-4">
                <form method="post" action="{{ route('store') }}" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <input type="text" class="form-control" name="title">
                    </div>
                    <div class="form-group">
                        <textarea class="ckeditor form-control" id="editor1" name="description"></textarea>
                    </div>
                    <button class="btn btn-primary" type="submit">Save</button>
                </form>
            </div>
    </div>

</body>
<script src="https://cdn.ckeditor.com/ckeditor5/35.2.0/classic/ckeditor.js"></script>
{{-- <script src="https://cdn.ckeditor.com/ckeditor5/35.2.0/decoupled-document/ckeditor.js"></script> --}}

{{-- <script src="{{ asset('public/ckeditor/ckeditor.js') }}"></script>i --}}
<script>
    
    ClassicEditor
	.create( document.querySelector( '#editor1' ),{
        
        ckfinder:{
            uploadUrl:"{{route('ckeditor.upload', ['_token' => csrf_token() ])}}"
        },
        image: {
            toolbar: [ 'toggleImageCaption', 'imageTextAlternative' ]
        }
    
    }
	)
    .catch( error => {
        console.error( error );
    } );
    
    
</script>

</html>
