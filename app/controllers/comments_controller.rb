class CommentsController < ApplicationController

    def index
        render json: Comment.all
      end

          #GET post/:id
    def show
      comment = Comment.find_by(id: params[:id])
      if comment
          render json: comment
      else
          render json: {error: "comment not found" }, status: :not_found
      end
  end
    
      def create
        comment = @current_user.comments.create!(comment_params)
        render json: comment, status: :created
      end
    
      private
    
      def comment_params
        params.permit(:text, :post_id, :user_id)
      end

end
