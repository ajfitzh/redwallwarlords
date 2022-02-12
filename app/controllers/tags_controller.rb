class TagsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

    #index
    def index
        render json: Tag.all 
    end

    #GET tag/:id
    def show
        tag = Tag.find_by(id: params[:id])
        if tag
            render json: tag
        else
            render json: {error: "tag not found" }, status: :not_found
        end
    end
      
    #POST tags
    def create
        tag = Tag.create(tag_params)
        if tag.valid?
            render json: tag, status: :created
        else
            render json: {error: tag.errors.full_messages}, status:unprocessable_entity
        end
    end
    
    private

    def tag_params
        params.permit(:name, :ingredients)
    end

    def record_not_found_response(exception)
        render json: {error: "tag not found"}, status: :not_found
    end
end
